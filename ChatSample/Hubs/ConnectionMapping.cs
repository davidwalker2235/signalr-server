using System;
using System.Collections.Generic;
using System.Linq;

namespace ChatSample.Hubs
{
    public class ConnectionMapping
    {
        private readonly Dictionary<string, int> _connections = new Dictionary<string, int>();

        public int Count
        {
            get
            {
                return _connections.Count;
            }
        }

        public void Add(string key)
        {
            lock (_connections)
            {
                int value;
                if (!_connections.TryGetValue(key, out value))
                {
                    _connections.Add(key, 0);
                }
            }
        }

        public Dictionary<string, int> GetRunners()
        {
            return _connections;
        }

        public void Remove(string key, string connectionId)
        {
            lock (_connections)
            {
                int value;
                if (!_connections.TryGetValue(key, out value))
                {
                    return;
                }

                _connections.Remove(key);
            }
        }

        public void Update(string key)
        {
            lock (_connections)
            {
                int value;
                if (_connections.TryGetValue(key, out value))
                {
                    int newValue = value + 1;
                    _connections[key] = newValue;
                }
            }
        }

        public Dictionary<string, int> GetUserValue(string user)
        {
            Dictionary<string, int> userData = new Dictionary<string, int>();
            int value = 0;
            lock (_connections)
            {
                if (_connections.TryGetValue(user, out value))
                {
                    userData.Add(user, value);
                }
            }

            return userData;
        }
    }
}
