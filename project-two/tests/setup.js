import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import regeneratorRuntime from 'regenerator-runtime'

Enzyme.configure({ adapter: new Adapter() });