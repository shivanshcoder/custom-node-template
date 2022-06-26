/**** some basic type definitions for safety (or for illustration) ****/

import { Node, NodeAPI, NodeDef } from 'node-red'

  module.exports = function (RED:NodeAPI):void {
    
    function LowerCaseNode(this:Node, config:NodeDef):void {

      RED.nodes.createNode(this,config);

      this.on('input', function(msg, send, done) {
        if(typeof(msg.payload) ==  "string"){
          msg.payload = msg.payload.toLowerCase();
        }
        send(msg);
        done();
      });

    }

    RED.nodes.registerType("lower-case", LowerCaseNode);
    
  }
