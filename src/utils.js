const addLeadingZero = (num) => {
    if (num.toString().length < 2) {
        return '0' + num;
    }
    return num;
}

const getTomorrowsWeather = (data) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = `${tomorrow.getFullYear()}-${addLeadingZero(tomorrow.getMonth() + 1)}-${addLeadingZero(tomorrow.getDate())}`;
    return data.filter((item) => item.applicable_date === dateStr)[0];
};

export default getTomorrowsWeather;
