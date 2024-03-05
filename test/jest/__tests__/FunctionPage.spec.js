import FunctionPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

test('Name Phadungkiat Sutayo 6404101325 avaliable on file' ,() =>{
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('#firstname').element.value).toBe('Phadungkiat');
  expect(wrapper.find('#lastname').element.value).toBe('Sutayo');
  expect(wrapper.find('#id').element.value).toBe('6404101325');

})

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(FunctionPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })
})

it('check text content to be as defined in variable', () => {
  const wrapper = shallowMount(FunctionPage, {
    data () {
      return {
        title: 'I love Vue.'
      }
    }
  })
  let header = wrapper.find('.htmlClass h1')
  expect(header.text()).toBe('I love Vue.')
})

test('should show the form element on the user output', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('should contain input fields in template', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('should have button', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('button').exists()).toBe(true)
})

test('trigger click event on button ', async () => {
  const wrapper = shallowMount(FunctionPage)
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.vm.addition(1,2)).toBe(3)
})
