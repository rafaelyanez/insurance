import { Dialog, DialogBody } from "@blueprintjs/core";

const ResponseDialog = (props) => {
  return (
    <Dialog
      title="Car Insurance Quote"
      isOpen={props.isOpen}
      canEscapeKeyClose={true}
      canOutsideClickClose={false}
      onClose={() => props.setIsDialogOpen(false)}
    >
      <DialogBody>
        {props?.quote?.success
          ? props?.quote?.premium
          : "Please Contact our Representatives"}
      </DialogBody>
    </Dialog>
  );
};

export default ResponseDialog;
