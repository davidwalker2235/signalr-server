using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChatSample.Hubs
{
    public class ChatHub : Hub
    {
        private readonly static ConnectionMapping<string> _connections = new ConnectionMapping<string>();
        public async Task Send(string name, string message)
        {
            // Call the broadcastMessage method to update clients.
            await Clients.All.SendAsync("broadcastMessage", name, message);
        }

        public async Task AddUserToList(string user)
        {
            IEnumerable<string> userList = _connections.GetNames();
                _connections.Add(user, Context.ConnectionId);
        }

        public async Task SendUserList()
        {
            IEnumerable<string> userList =_connections.GetConnections("David");
            await Clients.All.SendAsync("broadcastUserList", userList);
        }
    }
}