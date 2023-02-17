var vm = function () {
    console.log('ViewModel initiated...');
    //---Variáveis locais
    var self = this;
    self.searchUri = ko.observable('http://192.168.160.58/Formula1/api/Search/All');
    self.query = ko.observable('');
    self.matchingResults = ko.observableArray('');
    self.Searcherror = ko.observable('');

    self.search = function (value) {
        console.log('CALL: Search...');
        self.matchingResults.removeAll();
        if (value != "") {
            var composedUri = self.searchUri() + '?q=' + value
            SearchAjax(composedUri, 'GET').done(function (data) {
                for (i in data) {
                    if (data[i].Text.includes(value)) {
                        self.matchingResults.push(data[i].Text);
                    }
                }
            })
            $("#searchbar").autocomplete({
                source: self.matchingResults()
            })
        }

    }
    self.query.subscribe(self.search)
    //--- Internal functions

    function SearchAjax(uri, method, data) {
        self.Searcherror(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null,
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("AJAX Call[" + uri + "] Fail...");
                hideLoading();
                self.Searcherror(errorThrown);
            }
        });

    }
}

$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
