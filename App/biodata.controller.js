angular.module('biodata',[])
    .controller('inputName', inputName);

function inputName() {
    var vm = this;
    vm.memory = [];
    vm.age = 0;
    vm.years = {
        1990: '1990',
        1991: '1991',
        1992: '1992',
        1993: '1993',
        1994: '1994',
        1995: '1995',
        1996: '1996',
        1997: '1997',
        1998: '1998',
        1999: '1999',
        2000: '2000',
        2001: '2001',
        2002: '2002',
        2003: '2003',
        2004: '2004',
        2005: '2005',
        2006: '2006',
        2007: '2007',
        2008: '2008',
        2009: '2009',
        2010: '2010',
        2011: '2011',
        2012: '2012',
        2013: '2013',
        2014: '2014',
        2015: '2015',
        2016: '2016',
    };
    vm.calculateAge = calculateAge;
    function calculateAge(){
        var currentYear = new Date().getFullYear();
        vm.age = parseInt(currentYear) - parseInt(vm.year);

        vm.memory.unshift({
            name: vm.name,
            birthyear: vm.year,
            age: vm.age
        });
        vm.name = '';
        vm.year = '';
    };

};
