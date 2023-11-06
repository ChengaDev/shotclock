import styled from 'styled-components'

const DonateButton = () => {
  return (
    <Container>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="2VDRLPUT4BFFU" />
        <input type="hidden" name="no_recurring" value="0" />
        <input
          type="hidden"
          name="item_name"
          value="The app is free to use, if you wish to support me and the time invested to create this you can donate as much as you feel like."
        />
        <input type="hidden" name="currency_code" value="USD" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/IL/i/btn/btn_donateCC_LG.gif"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          src="https://www.paypal.com/en_IL/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
`

export default DonateButton
