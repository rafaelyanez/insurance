import { Callout, Dialog, DialogBody, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const ResponseDialog = (props) => {
  const premium = props?.quote?.premium?.toFixed(2);
  return (
    <Dialog
      title=""
      isOpen={props.isDialogOpen}
      canEscapeKeyClose={true}
      canOutsideClickClose={false}
      onClose={() => {
        console.log(`on close dialog`);
        props.setQuoteData({});
        props.setIsDialogOpen(false);
      }}
    >
      <DialogBody>
        {
          <Callout
            icon={
              props?.quote?.success
                ? IconNames.ENDORSED
                : IconNames.WARNING_SIGN
            }
            intent={props?.quote?.success ? Intent.SUCCESS : Intent.WARNING}
            title={
              props?.quote?.success
                ? "Insurance Quote"
                : "Important Information"
            }
          >
            {props?.quote?.success ? (
              <>
                Your Premium is ${premium}, if you decide to pay monthly your
                payments would be ${(premium / 12).toFixed(2)}. Your reference
                number is: #{props?.quote?.reference}
              </>
            ) : (
              <>
                <h3>Please Call Us</h3> Given the provided information, you'll
                need to speak with one of our Advisors to ensure you get the
                right coverage for your needs. Please call us at 1-800-ASIGURARE
              </>
            )}
          </Callout>
        }
      </DialogBody>
    </Dialog>
  );
};

export default ResponseDialog;
