'use strict';
let db = require('./../models');
let deviceDetails =[];
const UssdMenu = require("ussd-menu-builder");

//)implementation fo the ussd menu builder
let sessions = {};
let menu = new UssdMenu();
//handling ussd session
menu.sessionConfig({
  start: (sessionId, callback)=>{
      // initialize current session if it doesn't exist
      // this is called by menu.run()
       
      if(!(sessionId in sessions)) sessions[sessionId] = {};
      callback();
  },
  end: (sessionId, callback)=>{
      // clear current session
      // this is called by menu.end()
      delete sessions[sessionId];
      callback();
  },
  set: (sessionId, key, value, callback) => {
      // store key-value pair in current session
      sessions[sessionId][key] = value;
      callback();
  },
  get: (sessionId, key, callback)=>{
      // retrieve value by key in current session
      let value = sessions[sessionId][key];
      callback(null, value);
  }
});

// Define menu states
menu.startState({
  run: () => {
    //reinitializing my arrays
    deviceDetails =[];
    // use menu.con() to send response without terminating session
    menu.con(
      "Welcome to Wired Networks Ltd :" + "\n1: Enter new device" + "\n2: Enter sales person" + "\n3: Check status of mobile device" + "\n4: Mark device as sold"
    );
  },
  // next object links to next state based on user input
  next: {
    "1": "newDevice",
    "2": "registerAgent",
    "3": "buyInsurance",
    "4": "insurancePayment",
  },
  defaultNext: 'invalidOption'
});

menu.state("newDevice", {
 run: function(){
      menu.con('Enter device IMEI number');
  },
  next: {
      '*\\d+': 'newDevice.name'
  }
});

menu.state('newDevice.name', {
  run: function(){
     let name = menu.val;
     deviceDetails.push(name);
      menu.session.set('name', name);
      menu.con('Enter device color');
  },
  next: {
      '*[a-zA-Z]+': 'newDevice.color'
  }
});
menu.state('newDevice.color', {
  run: function(){
  let color = menu.val;
  deviceDetails.push(color);
    menu.session.set('name', color);
    menu.con('Enter device model');
},
next: {
    '*[a-zA-Z]+': 'newDevice.modelNo'
}
});

menu.state('newDevice.modelNo', {
  run: function(){
   let modelNo = menu.val;
   deviceDetails.push(modelNo);
    menu.session.set('name', modelNo);
    menu.con('Enter Warranty status\n' + '1) Yes / 2) No');
},
next: {
    '*\\d+': 'newDevice.warrantySt'
}
});
menu.state('newDevice.warrantySt', {
  run: function(){
   let warrantySt = menu.val;
   deviceDetails.push(warrantySt);
    menu.session.set('name', warrantySt);
    menu.con('Enter Insurance status\n' + '1) Yes / 2) No');
},
next: {
    '*\\d+': 'newDevice.insuranceSt'
}
});

menu.state('newDevice.insuranceSt', {
  run: function(){
    let insuranceSt = menu.val;
    deviceDetails.push(insuranceSt);
    menu.session.set('name', insuranceSt);
    menu.con('Enter Is device in stock\n' + '1) Yes / 2) No');
},
next: {
    '*\\d+': 'newDevice.deviceStock'
}
});
menu.state('newDevice.deviceStock', {
    run: function(){
      let deviceStock = menu.val;
      deviceDetails.push(deviceStock);
      console.log( );
        menu.end('Device has been successfully registered');

        db.Device.create({
              imei: deviceDetails[0],
              color: deviceDetails[1],
              model: deviceDetails[2],
              warrant_status: deviceDetails[3],
              insurance_status: deviceDetails[4],
              in_stock: deviceDetails[5]
        }).then(function(device) {
          console.log('device added', device);
        });
        
    
    }
  });
// add sales person
menu.state("registerAgent", {
  run: function(){
       menu.con('Enter sales agent name');
   },
   next: {
       '*[a-zA-Z]+': 'registerAgent.name'
   }
 });
 
 menu.state('registerAgent.name', {
   run: function(){
      let name = menu.val;
      deviceDetails.push(name);
       menu.session.set('name', name);
       menu.con('Enter sales agent email');
   },
   next: {
       '*\\w+@\\w+\\.\\w+': 'registerAgent.email'
   }
 });
 menu.state('registerAgent.email', {
   run: function(){
   let email = menu.val;
   deviceDetails.push(email);
     menu.session.set('email', email);
     menu.con('Enter Agent sales code');
 },
 next: {
     '*\\d+': 'registerAgent.code'
 }
 });
 
 menu.state('registerAgent.code', {
   run: function(){
    let code = menu.val;
    deviceDetails.push(code);
     menu.session.set('code', code);
     menu.con('Enter agent location\n' + 'e.g Thika');
 },
 next: {
     '*[a-zA-Z]+': 'registerAgent.location'
 }
 });
 menu.state('registerAgent.location', {
   run: function(){
    let location = menu.val;
    deviceDetails.push(location);
     menu.session.set('location', location);
     menu.con('Enter phone number\n' + 'e.g 0700...');
 },
 next: {
     '*\\d+': 'registerAgent.phoneNo'
 }
 });
 
 menu.state('registerAgent.phoneNo', {
   run: function(){
     let phoneNo = menu.val;
     deviceDetails.push(phoneNo);
     menu.session.set('phoneNo', phoneNo);
     menu.end('Agent successfully registered');
 
         db.Agent.create({
               name: deviceDetails[0],
               primary_email: deviceDetails[1],
               agent_sales_code: deviceDetails[2],
               location: deviceDetails[3],
               phone_number: deviceDetails[4]
         }).then(function(agent) {
           console.log('agent added', agent);
         });
         
     
     }
   });
   menu.state('invalidOption', {
		run: () => {
      menu.con(`Invalid option.Try again by 0`);
      
    },
    next: {
       0:'__start__'//going back to the main menu
    }
	})

module.exports = menu;
