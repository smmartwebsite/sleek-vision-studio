
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ConsultationForm from "@/components/ConsultationForm";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog: React.FC<ConsultationDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="accent" size="default">
          Get a Consultation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a Consultation</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <ConsultationForm 
            onSubmit={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
