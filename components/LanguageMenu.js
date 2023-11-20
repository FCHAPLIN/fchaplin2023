import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import "./LanguageMenu.scss"
import {useRouter} from '../navigation';
import {usePathname} from '../navigation';
import { useParams } from 'next/navigation'

const LanguageMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams()
 
  function handleChange(event) {
    router.push(pathname, { locale: event.target.value });
  }

  return(
    <Select
      className="lang-select"
      value={params.locale || 'fr'}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language'
      }}
    >

      <MenuItem value={'en'}>EN</MenuItem>
      <MenuItem value={'fr'}>FR</MenuItem>
    </Select>
  )
}

export default LanguageMenu;
