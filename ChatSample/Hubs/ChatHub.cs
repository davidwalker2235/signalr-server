using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChatSample.Hubs
{
    public class ChatHub : Hub
    {
        private readonly static ConnectionMapping _connections = new ConnectionMapping();
        private static int countDown = 60;
        private static bool isRunning = false;
        protected System.Threading.Timer tmrCountDown;
        public async Task SendNewUser(string name)
        {
            _connections.Update(name);
            Dictionary<string, int> userNamesList = _connections.GetRunners();
            await Clients.All.SendAsync("broadcastUserList", userNamesList);
        }
        private void restartCountDown()
        {
            lock (tmrCountDown)
            {
                if (tmrCountDown != null)
                {
                    tmrCountDown.Dispose();
                    tmrCountDown = null;
                    countDown = 60;
                    
                }
            }



        }
        private void strartCountdown()
        {
            if (tmrCountDown == null)
            {
                tmrCountDown = new System.Threading.Timer((state) =>
                {
                    countDown -= 1;
                    if (countDown < 0) {
                        isRunning = true;
                        restartCountDown();
                    }

                }, null, 1000, 1000);

            }

        }
        private void CheckCountDown()
        {
            if (_connections.Count == 0 || _connections.Count > 0 && (tmrCountDown == null && countDown == 60)) strartCountdown();
        }
        public async Task<bool> canRegister()
        {
            return countDown > 0 && !isRunning;
        }
        public void AddUserToList(string user)
        {
            _connections.Add(user);
            CheckCountDown();
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

        public async Task updateCounter(int timeLeft)
        {
            await Clients.All.SendAsync("updateCountdown", countDown);
        }

        public async Task SendWinner(string winner)
        {
            isRunning = false;
            _connections.Clear();
            await Clients.All.SendAsync("broadcastWinner", winner);
        }
    }
}