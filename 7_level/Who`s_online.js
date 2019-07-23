const whosOnline = (friends) => {
    let stat = {
        online : [],
        offline : [],
        away : []
    };
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            stat.online.push(friends[i].username);
        }
        if (friends[i].status === 'offline') {
            stat.offline.push(friends[i].username);
        }
        if (friends[i].lastActivity > 10 && friends[i].status ==='online') {
            stat.away.push(friends[i].username);
        }
    }
    Object.entries(stat).forEach(([x,y])=> {
        if(y.length===0){
            delete stat[x];
        }
    });
    return stat;
}

console.log(whosOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]));