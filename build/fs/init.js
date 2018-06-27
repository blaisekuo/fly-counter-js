load('api_config.js');
//load('api_events.js');
load('api_gpio.js');
load('api_mqtt.js');
//load('api_net.js');
//load('api_sys.js');
load('api_timer.js');
load('api_adc.js');


ADC.enable(0);


// Blink built-in LED every second
//GPIO.set_mode(led, GPIO.MODE_OUTPUT);
Timer.set(1000 /* 1 sec */, Timer.REPEAT, function() {
//  let value = GPIO.toggle(led);
  let flyval = ADC.read(0);
  let topic = '/losant/' + Cfg.get('device.id') + '/state';
  print('fly detected', flyval);
  let message = JSON.stringify({
      data: {
        movement: flyval
      }
  });
  let ok = MQTT.pub(topic, message, 1);
  print('Published:', ok ? 'yes' : 'no', 'topic:', topic, 'message:', message);
}, null);