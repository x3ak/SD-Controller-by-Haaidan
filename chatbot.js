var chatClient = function chatClient(options){
    this.username = options.username;
    this.password = options.password;
    this.channel = options.channel;

    this.server = 'irc-ws.chat.twitch.tv';
    this.port = 443;
}

chatClient.prototype.open = function open(){
    this.webSocket = new WebSocket('wss://' + this.server + ':' + this.port + '/', 'irc');

    
    this.webSocket.onerror = this.onError.bind(this);
    this.webSocket.onclose = this.onClose.bind(this);
    this.webSocket.onopen = this.onOpen.bind(this);
};

chatClient.prototype.onError = function onError(message){
    console.log('Error: ' + message);
};


chatClient.prototype.onOpen = function onOpen(){
    var socket = this.webSocket;

    if (socket !== null && socket.readyState === 1) {
        console.log('Connecting and authenticating...');

        socket.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
        socket.send('PASS ' + this.password);
        socket.send('NICK ' + this.username);
        socket.send('JOIN ' + this.channel);

    }
};

chatClient.prototype.onClose = function onClose(){
    console.log('Disconnected from the chat server.');
};

chatClient.prototype.close = function close(){
    if(this.webSocket){
        this.webSocket.close();
    }
};

chatClient.prototype.PRIVMSG = function PRIVMSG(comando){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #' + channel + ' : ' + comando);
    }
};



//highpriest-gems---------------------

chatClient.prototype.citrine = function citrine(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #'+ channel +' : !socketcitrine');
    }
};
chatClient.prototype.ruby = function ruby(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #'+ channel +' : !socketruby');
    }
};
chatClient.prototype.emerald = function emerald(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #'+ channel +' : !socketemerald');
    }
};
chatClient.prototype.onyx = function onyx(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #'+ channel +' : !socketonyx');
    }
};

//hp-spells-----------------------
chatClient.prototype.multispell = function multispell(s, x, n){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #'+ channel +' : !hp' + x + s + n);
    }
};
