import React, { useContext } from 'react';

import DashboardContext from '../../../context/dashboard-context';
import { HOT_REPOSITORY_BUTTON, HOT_USERS_BUTTON } from '../../../utils/contants';
import TESTS_IDS from '../../../utils/constants-testsid';

import './Button.scss';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonStateProps = {
  isLoading: boolean
  name: string
  id: string
}

const ButtonState = ({ isLoading, name, id }: ButtonStateProps) => {
  return (
    <div>
      {!isLoading && <PrimaryButton id={id} name={name} /> || <LoadingButton id={id} name={name} />}
    </div>
  )
}

const PrimaryButton: React.FC<Props> = (props: Props) => {
  const { setHotRepositoriesLoader, setTrendingUserLoader } = useContext(DashboardContext);

  const submitButton = () => {
    if (props.name === HOT_REPOSITORY_BUTTON.name) {
      setHotRepositoriesLoader()
    }
    if (props.name === HOT_USERS_BUTTON.name) {
      setTrendingUserLoader()
    }
  }

  return (
    <button data-testid={TESTS_IDS.primaryButton} {...props} className="btn btn-primary" value="Submit" onClick={submitButton}> {props.name} </button>
  )
}


const LoadingButton: React.FC<Props> = (props: Props) => <button {...props} data-testid={TESTS_IDS.loadingButton} className="btn btn-loading">  <i className="fa fa-circle-o-notch fa-spin"></i>{props.name} </button>

export default ButtonState;