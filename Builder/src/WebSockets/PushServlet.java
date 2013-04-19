package WebSockets;

import java.io.IOException;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocketServlet;
 
public class PushServlet extends WebSocketServlet {
 
    private static final long serialVersionUID = 1L;
 
    private final Map<String, Set<PrimeWebSocket>> connectedClients = new ConcurrentHashMap();
 
    @Override
    public void init() throws ServletException {
        super.init();
        String[] channels = {"chat","counter"};
 
        for(String channel : channels) {
            this.connectedClients.put(channel, new CopyOnWriteArraySet());
        }
    }
 
    @Override
    public WebSocket doWebSocketConnect(HttpServletRequest request, String protocol) {
        String channel = request.getRequestURI().split("/prime-push/")[1];
        System.out.println("Canal:"+channel);
        return new PrimeWebSocket(channel);
    }
 
    private class PrimeWebSocket implements WebSocket, WebSocket.OnTextMessage {
        Connection connection;
        String channel;
 
        public PrimeWebSocket(String channel) {
            this.channel = channel;
        }
 
        @Override
        public void onClose(int closeCode, String message) {
            connectedClients.get(this.channel).remove(this);
        }
 
        @Override
        public void onOpen(Connection connection) {
            this.connection = connection;
            connectedClients.get(this.channel).add(this);
        }
 
        @Override
        public void onMessage(String message) {
            System.out.println(message);
            try {
                for(PrimeWebSocket ws : connectedClients.get(this.channel)) {
                    ws.connection.sendMessage(message);
                }
            }catch(IOException e) {
                System.out.println(e);
            }
        }
    }
}