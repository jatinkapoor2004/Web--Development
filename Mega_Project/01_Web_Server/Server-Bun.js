import {serve} from "bun";
serve({
    fetch(request){
        const url= new URL(request.url);
        if(url.pathname=="/"){
            return new Response("Hello world",{status : 200});
        }
        else if(url.pathname=="/jatin"){
            return new Response("Jatin is entered",{status : 200});
        }
        else{
            return new Response("404 Page Not Found",{status : 400});
        }
    },
    port:3000,
    hostname:"127.0.0.1",
})