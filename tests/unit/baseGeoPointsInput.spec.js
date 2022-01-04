import { fireEvent, render } from '@testing-library/vue';
import Vuetify from 'vuetify';
import Vue from 'vue';
import BaseGeoPointsInput from '@/components/BaseGeoPointsInput';

Vue.config.productionTip = false;
Vue.use(Vuetify);

describe('BaseGeoPointsInput', () => {
  let props;
  let baseGeoPointsInput;

  beforeEach(() => {
    props = {
      value: {},
      label: 'Start point',
    };

    baseGeoPointsInput = render(BaseGeoPointsInput, { props });
  });

  it('The user sees valid label (passed from props)', () => {
    const { getByText } = baseGeoPointsInput;

    getByText(`${props.label} latitude`);
    getByText(`${props.label} longitude`);
  });

  it('Validation of inputs - no errors on start', async () => {
    const { queryByText } = baseGeoPointsInput;

    const noValidationError = queryByText('field is required');

    expect(noValidationError)
      .toBeNull();
  });

  it('Validation of inputs - field is required', async () => {
    const {
      getByLabelText,
      getAllByText,
    } = baseGeoPointsInput;

    const latitudeInput = getByLabelText(`${props.label} latitude`);
    const longitudeInput = getByLabelText(`${props.label} longitude`);

    await fireEvent.update(latitudeInput, '');
    await fireEvent.update(longitudeInput, '');
    await fireEvent.blur(latitudeInput);

    expect(getAllByText('field is required'))
      .toHaveLength(2);
  });

  it('Validation of inputs - field must be in range...', async () => {
    const {
      getByLabelText,
      findByText,
    } = baseGeoPointsInput;
    const latitudeInput = getByLabelText(`${props.label} latitude`);
    const longitudeInput = getByLabelText(`${props.label} longitude`);

    await fireEvent.update(latitudeInput, '-91');
    await fireEvent.update(longitudeInput, '181');

    await findByText('field must be in range (-90, 90)');
    await findByText('field must be in range (-180, 180)');
  });

  it('Child component does not override "value" prop', async () => {
    const { getByLabelText } = baseGeoPointsInput;
    const latitudeInput = getByLabelText(`${props.label} latitude`);

    await fireEvent.update(latitudeInput, '91');

    expect(Object.keys(props.value))
      .toHaveLength(0);
  });
});
