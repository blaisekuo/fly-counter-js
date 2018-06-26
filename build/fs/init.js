load('api_config.js');
load('api_events.js');
load('api_gpio.js');
//load('api_mqtt.js');
//load('api_net.js');
load('api_sys.js');
load('api_timer.js');
load('api_adc.js');


//let led = Cfg.get('pins.led');
//let button = Cfg.get('pins.button');
//let topic = '/devices/' + Cfg.get('device.id') + '/events';

//print('LED GPIO:', led, 'button GPIO:', button);

//let getInfo = function() {
  //return JSON.stringify({
    //total_ram: Sys.total_ram(),
    //free_ram: Sys.free_ram()
  //});
//};

ADC.enable(0);


// Blink built-in LED every second
//GPIO.set_mode(led, GPIO.MODE_OUTPUT);
Timer.set(100 /* 1 sec */, Timer.REPEAT, function() {
//  let value = GPIO.toggle(led);
  let flyval = ADC.read(0);
    print(flyval , 'fly detected');
//  print(value ? 'Tick' : 'Tock', 'uptime:', Sys.uptime(), getInfo());
}, null);

// Publish to MQTT topic on a button press. Button is wired to GPIO pin 0
//GPIO.set_button_handler(button, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 20, function() {
  //let message = getInfo();
  //let ok = MQTT.pub(topic, message, 1);
  //print('Published:', ok, topic, '->', message);
//}, null);

// Monitor network connectivity.
//Event.addGroupHandler(Net.EVENT_GRP, function(ev, evdata, arg) {
  //let evs = '???';
  //if (ev === Net.STATUS_DISCONNECTED) {
  //   evs = 'DISCONNECTED';
  //} else if (ev === Net.STATUS_CONNECTING) {
  //  evs = 'CONNECTING';
  //} else if (ev === Net.STATUS_CONNECTED) {
  //  evs = 'CONNECTED';
  //} else if (ev === Net.STATUS_GOT_IP) {
  //  evs = 'GOT_IP';
  //}
  //print('== Net event:', ev, evs);
//}, null);
