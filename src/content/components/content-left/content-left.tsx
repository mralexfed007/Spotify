import { ExpandMenuGroup } from './components/expand-menu-group/expand-menu-group';


const DropDownMain = [
  ['Browse', 'fas fa-window-restore'],
  ['Activity', 'fas fa-user-friends'],
  ['Radio', 'fas fa-broadcast-tower']
];
const DropDownYourMusic = [
  ['Songs', 'fas fa-headphones'],
  ['Albums', 'fas fa-music'],
  ['Artists', 'fas fa-user'],
  ['Local Files', 'fas fa-file']
];
const DropDownPlaylist = [
  ['Doo Wop', 'fas fa-record-vinyl'],
  ['Pop Classics', 'fas fa-record-vinyl'],
  ['Love $ongs', 'fas fa-record-vinyl'],
  ['Hipster', 'fas fa-record-vinyl'],
  ['New Music Friday', 'fas fa-record-vinyl'],
  ['Techno Poppers', 'fas fa-record-vinyl'],
  ['Summer Soothers', 'fas fa-record-vinyl'],
  ['Doo Wop', 'fas fa-record-vinyl'],
  ['Pop Classics', 'fas fa-record-vinyl'],
  ['Love $ongs', 'fas fa-record-vinyl'],
  ['Hipster', 'fas fa-record-vinyl'],
  ['New Music Friday', 'fas fa-record-vinyl'],
  ['Techno Poppers', 'fas fa-record-vinyl'],
  ['Summer Soothers', 'fas fa-record-vinyl'],
  ['Hard Rap', 'fas fa-record-vinyl']
];

type mapProps = {
  list: Array<Array<string>>,
  className: string
}

const DropDownList: React.FunctionComponent <mapProps> = ({list, className}) => {
  return (
    <ul className={className}>
      {list.map((item, i) => (
        <li key={i}>
          <div className="dropdown-list__item">
          <span>
            <i className={`${item[1]}`}></i>
          </span>
          <button
            onClick={() => {}}
          >
            {item[0]}
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export const ContentLeft: React.FunctionComponent = () : JSX.Element => {

  return (
    <div className ="content__left">
      <section className="navigation">
        <div className="navigation__list">
          <ExpandMenuGroup title="Main">
            <DropDownList list={DropDownMain} className="dropdown-list" />
          </ExpandMenuGroup>
        </div>
        <div className="navigation__list">
          <ExpandMenuGroup title="Your music">
            <DropDownList list={DropDownYourMusic} className="dropdown-list" />
          </ExpandMenuGroup>
        </div>
        <div className="navigation__list">
          <ExpandMenuGroup title="Playlist">
            <DropDownList list={DropDownPlaylist} className="dropdown-list" />
          </ExpandMenuGroup>
        </div>
      </section>
      <section className="playlist">
        <div className="playlist__btn">
          <i className="fas fa-plus"></i>
        </div>
        <span>New Playlist</span>
      </section>
      <section className="playing">
        <div className="playing__artist">
          <span className="playing__artist__img">
            <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Red&facialHairType=BeardMedium&facialHairColor=Black&clotheType=BlazerShirt&clotheColor=Blue02&eyeType=Side&eyebrowType=FlatNatural&mouthType=Sad&skinColor=Tanned'
              alt="random avatar"
            />
          </span>
        </div>
        <div className="playing__song">
          <button className="playing__song__name">
            Some Type of Love
          </button>
          <button className="playing__song__artist">
            Charlie Puth
          </button>
        </div>
        <div className="playing__add">
          <i className="fas fa-check"></i>
        </div>
      </section>
    </div>
  );
}