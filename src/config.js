var config = {
    name: 'Unofficial Support for Trello',
    version: '1.4',
    cache: false,
    
    //API SETTINGS;
    API_URL:    'https://trello.com/1',                    //Trello API URL (moving here from Trello class);
    API_KEY:    '259487aa69671ac9aafc5f8672ffe0f7',        //Trello API Key;
    API_SECRET:  '', //Trello API Secret (though not actually needed for this);
    API_RETURN_URL:  'http://clintoncrick.com/prello/',    //URL to any page which can take hash value and direct to this app;
};
this.exports = config;