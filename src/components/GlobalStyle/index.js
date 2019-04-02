import {Global} from '@emotion/core'

import reset from './reset'
import defaults from './defaults'

const styles = [reset, defaults]

export default () => <Global {...{styles}} />
