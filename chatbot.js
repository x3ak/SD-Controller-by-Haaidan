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

chatClient.prototype.archer = function archer(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !archer');
    }
};

chatClient.prototype.firemage = function firemage(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !firemage');
    }
};

chatClient.prototype.frostmage = function frostmage(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !frostmage');
    }
};

chatClient.prototype.alchemist = function alchemist(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !alchemist');
    }
};

chatClient.prototype.rogue = function rogue(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !rogue');
    }
};

chatClient.prototype.bard = function bard(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !bard');
    }
};

chatClient.prototype.trapper = function trapper(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !trapper');
    }
};

chatClient.prototype.highpriest = function highpriest(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !highpriest');
    }
};


chatClient.prototype.t1 = function t1(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !1');
    }
};
chatClient.prototype.t2 = function t2(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !2');
    }
};
chatClient.prototype.t3 = function t3(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !3');
    }
};
chatClient.prototype.t4 = function t4(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !4');
    }
};
chatClient.prototype.t5 = function t5(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !5');
    }
};
chatClient.prototype.t6 = function t6(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !6');
    }
};
chatClient.prototype.t7 = function t7(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !7');
    }
};
chatClient.prototype.t8 = function t8(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !8');
    }
};
chatClient.prototype.t9 = function t9(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !9');
    }
};
chatClient.prototype.t10 = function t10(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !10');
    }
};
chatClient.prototype.t11 = function t11(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !11');
    }
};
chatClient.prototype.t12 = function t12(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !12');
    }
};
chatClient.prototype.leave = function leave(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !leave');
    }
};
chatClient.prototype.train = function train(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !train');
    }
};
chatClient.prototype.altar = function altar(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !altar');
    }
};
chatClient.prototype.p = function p(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !p');
    }
};
chatClient.prototype.pd = function pd(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !pd');
    }
};

//trapper------------------

chatClient.prototype.spbear = function spbear(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spbear');
    }
};
chatClient.prototype.spweak = function spweak(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spweak');
    }
};
chatClient.prototype.sppoison = function sppoison(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sppoison');
    }
};
chatClient.prototype.spfire = function spfire(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spfire');
    }
};
chatClient.prototype.spfrost = function spfrost(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spfrost');
    }
};
chatClient.prototype.sparmor = function sparmor(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sparmor');
    }
};

//frostmage-------------------

chatClient.prototype.spa = function spa(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spa');
    }
};
chatClient.prototype.spb = function spb(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spb');
    }
};
chatClient.prototype.spc = function spc(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spc');
    }
};
chatClient.prototype.spd = function spd(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !spd');
    }
};

//alchemist----------------

chatClient.prototype.sp1 = function sp1(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp1');
    }
};
chatClient.prototype.sp2 = function sp2(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp2');
    }
};
chatClient.prototype.sp3 = function sp3(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp3');
    }
};
chatClient.prototype.sp4 = function sp4(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp4');
    }
};
chatClient.prototype.sp5 = function sp5(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp5');
    }
};
chatClient.prototype.sp6 = function sp6(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp6');
    }
};
chatClient.prototype.sp7 = function sp7(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp7');
    }
};
chatClient.prototype.sp8 = function sp8(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp8');
    }
};
chatClient.prototype.sp9 = function sp9(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp9');
    }
};

//rogue--------------------

chatClient.prototype.sp = function sp(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !sp');
    }
};

//highpriest-gems---------------------

chatClient.prototype.citrine = function citrine(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !socketcitrine');
    }
};
chatClient.prototype.ruby = function ruby(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !socketruby');
    }
};
chatClient.prototype.emerald = function emerald(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !socketemerald');
    }
};
chatClient.prototype.onyx = function onyx(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !socketonyx');
    }
};

//hp-spells-----------------------
chatClient.prototype.multispell = function multispell(s, x, n){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hp' + x + s + n);
    }
};

chatClient.prototype.enl = function enl(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpenl');
    }
};
chatClient.prototype.mdt = function mdt(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpmdt');
    }
};
chatClient.prototype.chg = function chg(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpchg');
    }
};
chatClient.prototype.spw = function spw(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpspw');
    }
};
chatClient.prototype.hst = function hst(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hphst');
    }
};
chatClient.prototype.arm = function arm(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hparm');
    }
};
chatClient.prototype.lck = function lck(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hplck');
    }
};
chatClient.prototype.unb = function unb(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpunb');
    }
};
chatClient.prototype.wis = function wis(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpwis');
    }
};
chatClient.prototype.ora = function ora(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpora');
    }
};
chatClient.prototype.shd = function shd(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpshd');
    }
};
chatClient.prototype.trn = function trn(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hptrn');
    }
};
chatClient.prototype.knw = function knw(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpknw');
    }
};
chatClient.prototype.rst = function rst(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hprst');
    }
};
chatClient.prototype.sxp = function sxp(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpsxp');
    }
};
chatClient.prototype.frz = function frz(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpfrz');
    }
};
chatClient.prototype.frt = function frt(){
    if(this.webSocket){
        this.webSocket.send('PRIVMSG #archonthewizard : !hpfrt');
    }
};