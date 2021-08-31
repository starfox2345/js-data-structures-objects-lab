// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver, {[key]: value})
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const noDelete = Object.assign({}, driver)
    delete noDelete[key]
    return noDelete
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}