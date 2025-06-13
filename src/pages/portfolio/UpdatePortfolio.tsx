import WizardContainer from '@components/common/wizard/WizardContainer'
import { useProfileStore } from '@store/profileStore'

const UpdatePortfolio = () => {
	const { profileStore } = useProfileStore()
	return <WizardContainer mode="createOrUpdate" profileData={profileStore} type='portfolio'/>
}

export default UpdatePortfolio
