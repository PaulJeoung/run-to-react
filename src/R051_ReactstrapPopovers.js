import React, {Component} from "react";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

class R051_ReactstrapPopovers extends Component {
    render() {
        return(
            <>
                <Button id="Popover_id" type="button">Popover Button</Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>Aenean id magna id risus congue ornare.</PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopovers;