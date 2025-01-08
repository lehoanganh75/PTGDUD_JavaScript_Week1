var tienBoa = [275, 40, 430];

tienBoa.forEach(bill => {
    var tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    
    const total = bill + tip;
    
    console.log(`Hoa don la ${bill}, tien boa la ${tip.toFixed(2)}, tong gia tri ${total.toFixed(2)}`);
});
