angular.module('biodata')
    .controller('inputName', inputName);

function inputName() {
    var vm = this;
    vm.memory = [];
    vm.age = 0;
    vm.years = {
        2014: '2014',
        2016: '2016',
        2015: '2015',
        2013: '2013',
        2012: '2012',
        2011: '2011',
        2010: '2010',
        2009: '2009',
        2008: '2008',
        2007: '2007',
        2006: '2006',
        2005: '2005',
        2004: '2004',
        2003: '2003',
        2002: '2002',
        2001: '2001',
        2000: '2000',
        1999: '1999',
        1998: '1998',
        1997: '1997',
        1996: '1996',
        1995: '1995',
        1994: '1994',
        1993: '1993',
        1992: '1992',
        1991: '1991',
        1990: '1990',
        EMPTY: 'haha'
    };
    vm.birthyear = vm.years.EMPTY;

    function calculateAge() {
        var currentYear = new Date();
        vm.age = currentYear - parseInt(vm.birthyear);

        vm.memory.unshift({
            name: vm.name,
            birtyear: vm.birthyear;
        age: vm.age;
    })
        vm.age = 0;

    }

};
