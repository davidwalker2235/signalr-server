using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChatSample.Hubs
{
    public class ChatHub : Hub
    {
        private readonly static ConnectionMapping _connections = new ConnectionMapping();
        public async Task SendNewUser(string name)
        {
            _connections.Update(name);
            Dictionary<string, int> userNamesList = _connections.GetRunners();
            await Clients.All.SendAsync("broadcastUserList", userNamesList);
        }

        public void AddUserToList(string user)
        {
            _connections.Add(user);
        }

        public async Task SendUserNames()
        {
            Dictionary<string, int> userNamesList = _connections.GetRunners();
            await Clients.All.SendAsync("broadcastUserList", userNamesList);
        }

        public async Task SendSingleUserValue(string user)
        {
            Dictionary<string, int> userData = new Dictionary<string, int>();
            _connections.Update(user);

            await Clients.All.SendAsync("broadcastUser", _connections.GetUserValue(user));
        }
    }
}