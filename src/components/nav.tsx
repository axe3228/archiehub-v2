
export interface NavProps {
  activeSection: number;
}

const Nav = ({activeSection}: NavProps) => {
  return (
    <ul className="mt-16 w-max">
      <li>
        <a className={`group flex items-center py-3 ${activeSection == 0 ? 'active-link' : ''}`} href="#about">
          <span
            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-dark-hover 
            group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
          ></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
          group-hover:text-dark-hover group-focus-visible:text-slate-200">
            About
          </span>
        </a>
      </li>
      <li>
        <a className={`group flex items-center py-3 ${activeSection == 1 ? 'active-link' : ''}`} href="#experience">
          <span
            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-dark-hover 
            group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
          ></span>
          <span
            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-dark-hover 
            group-focus-visible:text-slate-200"
          >
            Experience
          </span>
        </a>
      </li>
      <li>
        <a className={`group flex items-center py-3 ${activeSection == 2 ? 'active-link' : ''}`} href="#projects">
          <span
            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-dark-hover 
            group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
          ></span>
          <span
            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-dark-hover 
            group-focus-visible:text-slate-200"
          >
            Projects
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Nav;
