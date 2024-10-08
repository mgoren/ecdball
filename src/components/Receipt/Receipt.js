import { useEffect } from 'react';
import { scrollToTop, websiteLink } from 'utils';
import OrderSummary, { PersonSummary } from 'components/OrderSummary';
import { Divider, Typography } from '@mui/material';
import { StyledLink } from 'components/Layout/SharedStyles';
import config from 'config';
const { COVID_POLICY_URL, CHECK_TO, CHECK_ADDRESS, EVENT_TITLE, PAYMENT_DUE_DATE, DIRECT_PAYMENT_URL } = config;

// relies on passing order as prop to ensure is updated
export default function Receipt({ order, person, isPurchaser }) {
  const isCheckPayment = order.paymentId === 'check';
  const isElectronicPayment = !isCheckPayment;
  const total = order.people.reduce((total, person) => total + person.admission, 0) + order.donation;
  const paid = isCheckPayment ? 0 : order.deposit || total;
  const isDeposit = order.deposit > 0;
  const isFullPayment = !isDeposit;
  const firstPersonName = order.people[0].first;
  
  useEffect(() => { scrollToTop() },[]);

  const purchaserCheckPaymentContent = (
    <>
      <Typography component='p' color='error' sx={{ mt: 2 }}>
        <strong>You are not on the waitlist yet!</strong>
      </Typography>
      <Typography component='p'>
        The waitlist order is determined by when we receive payment.<br />
        Paying soon will add you to the waitlist and increase your chance of being able to attend the Ball.<br />
        If at any point you decide to remove yourself from the waitlist, let David (macemondavid@gmail.com) know and he will process a 100% refund.<br />
        Please send a check for {isDeposit ? `at least $${order.deposit} to hold` : `$${total} to secure`} your spot on the waitlist.<br />
        (Or you can still pay electronically <StyledLink to={websiteLink(DIRECT_PAYMENT_URL)}>here</StyledLink>.)
      </Typography>
      <Typography component='p' sx={{ mt: 2 }}>
        Make your check out to {CHECK_TO}:<br />
        {CHECK_ADDRESS}
      </Typography>
    </>
  );

  const purchaserElectronicPaymentContent = (
    <Typography component='p' sx={{ mt: 2 }}>
      Thank you for registering for the {EVENT_TITLE}!<br />
      You are currently on the wait-list for the 2024 Portland English Ball. We will let you know as soon as possible if someone cancels and there is space for you.<br />

      Your payment for ${paid} has been successfully processed.<br />
      If you decide to remove yourself from the waitlist, let David (macemondavid@gmail.com) know and he will process a 100% refund.<br />
      {isDeposit &&
        <strong>
          Your balance is due by {PAYMENT_DUE_DATE}.<br />
          To pay it, please go to <StyledLink to={websiteLink(DIRECT_PAYMENT_URL)}>{DIRECT_PAYMENT_URL}</StyledLink>.
        </strong>
      }
    </Typography>
  );

  const additionalPersonPaymentContent = (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        Someone has signed you up for the {EVENT_TITLE}!
      </Typography>
      <Typography component='p' sx={{ mt: 2 }}>
        {isElectronicPayment && isFullPayment && "We've received payment for your registration."}
        {isElectronicPayment && isDeposit && `We are holding your spot. The balance of your registration fee is due by ${PAYMENT_DUE_DATE}.`}
        {isCheckPayment && <strong>Your spot will be confirmed once we receive payment for your registration.</strong>}
      </Typography>
    </>
  );

  return(
    <>
      {isPurchaser ?
        <>
          <Typography component='p'>Thanks, {firstPersonName}!</Typography>
          {isCheckPayment ? purchaserCheckPaymentContent : purchaserElectronicPaymentContent}
        </>
      :
        additionalPersonPaymentContent
      }

      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>

      <Typography component='p' sx={{ mt: 2 }}>
        See <StyledLink to={websiteLink(COVID_POLICY_URL)}>here</StyledLink> for the full Covid policy.<br />
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        {EVENT_TITLE} is a fragrance-free event.<br />
        Please use only fragrance-free products.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Hope to dance with you soon at the {EVENT_TITLE}!
      </Typography>

      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>

      <Typography component='p' variant="h6" gutterBottom={true}>
        Registration Information:
      </Typography>

      {isPurchaser ?
        <OrderSummary order={order} currentPage='confirmation' />
      :
        <PersonSummary person={person} />
      }
    </>
  );
}
