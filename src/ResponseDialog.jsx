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
      <DialogBody>{props.dialogBody}</DialogBody>
    </Dialog>
  );
};

export default ResponseDialog;
