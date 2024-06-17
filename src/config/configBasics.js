const config = {
  SANDBOX_MODE: true, // for testing only
  SHOW_PRE_REGISTRATION: false,
  ADMISSION_QUANTITY_MAX: 2,
  ADMISSION_COST_RANGE: [50, 50],
  ADMISSION_COST_DEFAULT: 50,
  DEPOSIT_OPTION: false,
  DEPOSIT_COST: 50,
  DONATION_OPTION: true,
  DONATION_MAX: 999,
  INCLUDE_PRONOUNS_ON_NAMETAG: false,
  INCLUDE_LAST_ON_NAMETAG: true,
  PAYMENT_METHODS: ['paypal', 'check'], // options are stripe|paypal|check (first is default)
  EVENT_TITLE: '2024 Portland ECD Ball',
  EVENT_LOCATION: 'Someplace, Somewhere',
  EVENT_LOCATION_2: 'Some address',
  EVENT_DATE: 'November 1-3, 2024',
  TITLE: '2024 Portland ECD Ball Registration',
  CONFIRMATION_PAYPAL_TITLE: '2024 ECD Ball Confirmation',
  CONFIRMATION_CHECK_TITLE: '2024 ECD Ball Registration',
  EMAIL_CONTACT: 'registrar@portlandecdball.info',
  COVID_POLICY_URL: 'pcdc.fun/covid19',
  SAFETY_POLICY_URL: 'example.com/safety',
  DIRECT_PAYMENT_URL: 'paypal.me/PortlandBall',
  CHECK_TO: 'Portland ECD Ball',
  CHECK_ADDRESS: <>David Macemon<br />19936 Derby St<br />West Linn, OR 97068</>,
  PAYMENT_DUE_DATE: 'Example Payment Due Date',
  PERSON_INPUT_LABELS: [ 'Your contact information', 'Second admission', 'Third admission', 'Fourth admission' ],
  NUM_PAGES: 2,
  STEPS: [
    {key: 1, label: 'Info'},
    {key: 2, label: 'Payment'},
    {key: 'checkout', label: 'Checkout'}
  ],
};

export default config;
