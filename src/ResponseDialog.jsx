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
      onClose={() => props.setIsDialogOpen(false)}
    >
      <DialogBody>
        {props?.quote?.success ? (
          premium
        ) : (
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
                payments would be ${(premium / 12).toFixed()}. Your reference
                number is: #{props?.quote?.reference}
              </>
            ) : (
              <>
                <h3>Please Call Us</h3> Gvien the provided information, you'll
                need to speak with one of our Advisors to ensure you get the
                right coverage for your needs. Please call us at 1-800-ASIGURARE
              </>
            )}
          </Callout>
        )}
      </DialogBody>
    </Dialog>
  );
};

export default ResponseDialog;
