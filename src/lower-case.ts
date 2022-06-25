/**** some basic type definitions for safety (or for illustration) ****/

type NR_Node      = any

import { Node, NodeAPI, NodeDef, NodeMessage, NodeMessageInFlow } from 'node-red'


/**** actual node definition ****/

  export default function (RED:NodeAPI):void {
    let NodeSet:{ [Id:string]:NR_Node }        // will be filled at flow startup

    let InvocationCounter:number                    = 0
    let InvocationMapper:{ [Index:number]:NR_Node } = Object.create(null)

  /**** resuable-in ****/

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
  
  }
