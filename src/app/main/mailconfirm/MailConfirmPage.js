import React, {Component} from 'react';
import {withStyles, Card, CardContent, Icon, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
});

class MailConfirmPage extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className="w-full max-w-384">

                            <CardContent className="flex flex-col items-center justify-center p-32">

                                <div className="m-32">
                                    <Icon className="text-96" color="action">email</Icon>
                                </div>

                                <Typography variant="h5" className="text-center mb-16">Confirm your email address!</Typography>

                                <Typography className="text-center mb-16 w-full" color="textSecondary">
                                    A confirmation e-mail has been sent to <b></b>.
                                </Typography>

                                <Typography className="text-center w-full" color="textSecondary">
                                    Check your inbox and click on the "Confirm my email" link to confirm your email address.
                                </Typography>

                                <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                    <Link className="font-medium" to="/reset-password">Go back to reset password</Link>
                                </div>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(MailConfirmPage);
