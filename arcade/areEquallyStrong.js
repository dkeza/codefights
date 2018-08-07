function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let result = false, yourMin = 0, friendsMin = 0, yourMax = 0, friendsMax = 0;

    yourMin = Math.min(yourLeft, yourRight);
    friendsMin = Math.min(friendsLeft, friendsRight);

    yourMax = Math.max(yourLeft, yourRight);
    friendsMax = Math.max(friendsLeft, friendsRight);

    
    if (yourMin === friendsMin && yourMax === friendsMax) {
        result = true;
    }

    return result;
}
