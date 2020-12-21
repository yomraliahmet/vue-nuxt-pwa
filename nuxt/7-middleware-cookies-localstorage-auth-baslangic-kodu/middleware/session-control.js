export default function(context){
    //console.log("Middleware | Session Control...");

    if(process.client){
        //console.log("Client");
        context.store.dispatch("initAuth");
    }else{
        //console.log("Server");
        context.store.dispatch("initAuth", context.req);
    }
}