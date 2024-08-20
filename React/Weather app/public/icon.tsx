import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconProp } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome/kit-KIT_CODE/icons'

@ts-ignore
const myIcon : IconProp = ['kit', 'my-icon']

const element = <FontAwesomeIcon icon={myIcon} />

ReactDOM.render(element, document.body)