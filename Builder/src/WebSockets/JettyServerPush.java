package WebSockets;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
//import servlet.PushServlet;

public class JettyServerPush {
 
    public static void main(String[] args) throws Exception {
        Server server = new Server(2222);
 
        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);
 
        context.addServlet(new ServletHolder(new PushServlet()), "/*");
 
        server.start();
        System.out.println("Escuchando...");
        server.join();
        
    }
}