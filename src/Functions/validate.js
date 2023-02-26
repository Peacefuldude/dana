export const validate = (data) => {

    const errors = {};

    if (!data.temperature) {
        errors.temperature = "Enter a value or use the provided list.";
    } else {
        delete errors.temperature;
    }

    if (!data.humidity) {
        errors.humidity = "Enter a value use the provided list.";
    } else {
        delete errors.humidity;
    }

    // if (!data.CompanyName) {
    //     errors.CompanyName = "Enter a value use the provided list.";
    // } else {
    //     delete errors.CompanyName;
    // }

    // if (!data.ProjectName) {
    //     errors.ProjectName = "Enter a value use the provided list.";
    // } else {
    //     delete errors.ProjectName;
    // }

    // if (!data.Designer) {
    //     errors.Designer = "Enter a value use the provided list.";
    // } else {
    //     delete errors.Designer;
    // }

    // if (!data.baze) {
    //     errors.baze = "Enter a value use the provided list.";
    // } else {
    //     delete errors.baze;
    // }

    return errors;

}