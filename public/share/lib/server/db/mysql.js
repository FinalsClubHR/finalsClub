// Generated by CoffeeScript 1.6.2
var MysqlDb, defaultOptions, mysql;

mysql = require('mysql');

defaultOptions = {
  schema: 'sharejs',
  uri: null,
  create_tables_automatically: true,
  operations_table: 'ops',
  snapshot_table: 'snapshots'
};

module.exports = MysqlDb = function(options) {
  var client, k, operations_table, snapshot_table, v, _ref,
    _this = this;

  if (!(this instanceof MysqlDb)) {
    return new Db;
  }
  if (options == null) {
    options = {};
  }
  for (k in defaultOptions) {
    v = defaultOptions[k];
    if ((_ref = options[k]) == null) {
      options[k] = v;
    }
  }
  client = options.client || mysql.createConnection(options);
  client.connect();
  snapshot_table = options.schema && ("" + options.schema + "." + options.snapshot_table) || options.snapshot_table;
  operations_table = options.schema && ("" + options.schema + "." + options.operations_table) || options.operations_table;
  this.close = function() {
    return client.end();
  };
  this.initialize = function(callback) {
    var sql;

    console.warn('Creating mysql database tables');
    sql = "CREATE SCHEMA " + options.schema + ";";
    client.query(sql, function(error, result) {
      return error != null ? error.message : void 0;
    });
    sql = "CREATE TABLE " + snapshot_table + " (\n  doc varchar(256) NOT NULL,\n  v int NOT NULL,\n  type varchar(256) NOT NULL,\n  snapshot text NOT NULL,\n  meta text NOT NULL,\n  created_at timestamp NOT NULL,\n  CONSTRAINT snapshots_pkey PRIMARY KEY (doc, v)\n);";
    client.query(sql, function(error, result) {
      return error != null ? error.message : void 0;
    });
    sql = "CREATE TABLE " + operations_table + " (\n  doc varchar(256) NOT NULL,\n  v int NOT NULL,\n  op text NOT NULL,\n  meta text NOT NULL,\n  CONSTRAINT operations_pkey PRIMARY KEY (doc, v)\n);";
    return client.query(sql, function(error, result) {
      return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
    });
  };
  this.dropTables = function(callback) {
    var sql;

    sql = "DROP SCHEMA " + options.schema + " CASCADE;";
    return client.query(sql, function(error, result) {
      return typeof callback === "function" ? callback(error.message) : void 0;
    });
  };
  this.create = function(docName, docData, callback) {
    var sql, values;

    sql = "INSERT INTO " + snapshot_table + " SET ?";
    values = {
      doc: docName,
      v: docData.v,
      snapshot: JSON.stringify(docData.snapshot),
      meta: JSON.stringify(docData.meta),
      type: docData.type,
      created_at: new Date
    };
    return client.query(sql, values, function(error, result) {
      if (error == null) {
        return typeof callback === "function" ? callback() : void 0;
      } else if (error.toString().match("duplicate key value violates unique constraint")) {
        return typeof callback === "function" ? callback("Document already exists") : void 0;
      } else {
        return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
      }
    });
  };
  this["delete"] = function(docName, dbMeta, callback) {
    var sql, values;

    sql = "DELETE FROM " + operations_table + "\nWHERE doc = ?";
    values = [docName];
    return client.query(sql, values, function(error, result) {
      if (error == null) {
        sql = "DELETE FROM " + snapshot_table + "\nWHERE doc = ?";
        return client.query(sql, values, function(error, result) {
          if ((error == null) && result.length > 0) {
            return typeof callback === "function" ? callback() : void 0;
          } else if (error == null) {
            return typeof callback === "function" ? callback("Document does not exist") : void 0;
          } else {
            return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
          }
        });
      } else {
        return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
      }
    });
  };
  this.getSnapshot = function(docName, callback) {
    var sql, values;

    sql = "SELECT *\nFROM " + snapshot_table + "\nWHERE doc = ?\nORDER BY v DESC\nLIMIT 1";
    values = [docName];
    return client.query(sql, values, function(error, result) {
      var data, row;

      if ((error == null) && result.length > 0) {
        row = result[0];
        data = {
          v: row.v,
          snapshot: JSON.parse(row.snapshot),
          meta: JSON.parse(row.meta),
          type: row.type
        };
        return typeof callback === "function" ? callback(null, data) : void 0;
      } else if (error == null) {
        return typeof callback === "function" ? callback("Document does not exist") : void 0;
      } else {
        return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
      }
    });
  };
  this.writeSnapshot = function(docName, docData, dbMeta, callback) {
    var sql, values;

    sql = "UPDATE " + snapshot_table + "\nSET ?\nWHERE doc = ?";
    values = {
      v: docData.v,
      snapshot: JSON.stringify(docData.snapshot),
      meta: JSON.stringify(docData.meta)
    };
    return client.query(sql, [values, docName], function(error, result) {
      if (error == null) {
        return typeof callback === "function" ? callback() : void 0;
      } else {
        return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
      }
    });
  };
  this.getOps = function(docName, start, end, callback) {
    var sql, values;

    end = end != null ? end - 1 : 2147483647;
    sql = "SELECT *\nFROM " + operations_table + "\nWHERE v BETWEEN ? AND ?\nAND doc = ?\nORDER BY v ASC";
    values = [start, end, docName];
    return client.query(sql, values, function(error, result) {
      var data;

      if (error == null) {
        data = result.map(function(row) {
          return {
            op: JSON.parse(row.op),
            meta: JSON.parse(row.meta)
          };
        });
        return typeof callback === "function" ? callback(null, data) : void 0;
      } else {
        return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
      }
    });
  };
  this.writeOp = function(docName, opData, callback) {
    var sql, values;

    sql = "INSERT INTO " + operations_table + " SET ?";
    values = {
      doc: docName,
      op: JSON.stringify(opData.op),
      v: opData.v,
      meta: JSON.stringify(opData.meta)
    };
    return client.query(sql, values, function(error, result) {
      if (error == null) {
        return typeof callback === "function" ? callback() : void 0;
      } else {
        return typeof callback === "function" ? callback(error != null ? error.message : void 0) : void 0;
      }
    });
  };
  if (options.create_tables_automatically) {
    client.query("SELECT * from " + snapshot_table + " LIMIT 0", function(error, result) {
      if (error != null ? error.message.match("(does not exist|ER_NO_SUCH_TABLE)") : void 0) {
        return _this.initialize();
      }
    });
  }
  return this;
};
