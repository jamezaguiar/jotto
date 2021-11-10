import { shallow } from 'enzyme';
import App from './App';

test('renders page title `Jotto`', () => {
  const wrapper = shallow(<App />);
  const pageTitle = wrapper.find('h1').text();
  expect(pageTitle).toBe('Jotto');
});
