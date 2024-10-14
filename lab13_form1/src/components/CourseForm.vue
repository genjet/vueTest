<template>
    <div>
        <h2>Course Form below:</h2>
        <form @submit.prevent="submitForm">
            <div class="form-control" :class="{ invalid: idValid === 0 }">
                <label for="course-id">course id</label>
                <input id="course-id" type="text" name="course-id" v-model="courseId" @blur="validateId" />
                <p v-if="idValid === 0">course id can not be empty</p>
                <br />
                <label for="course-name">course name</label>
                <input id="course-name" type="text" name="course-name" v-model="courseName" />
                <br />
                <label for="course-duration">course duration</label>
                <input id="course-duration" type="number" name="course-duration" v-model.number="courseDuration" />
                <br />
            </div>
            <div>
                <label for="category">category</label>
                <select id="category" v-model="category">
                    <option value="java">Java</option>
                    <option value="c_sharp">C#</option>
                    <option value="python">Python</option>
                </select>
            </div>
            <div>
                <h3>need equipment</h3>
                <input id="arduino" name="equipment" type="checkbox" value="arduino" v-model="equipment" />
                <label for="arduino">arduino</label>
                <input id="webcam" name="equipment" type="checkbox" value="webcam" v-model="equipment" />
                <label for="webcam">webcam</label>
                <input id="internet_access" name="equipment" type="checkbox" value="internet_access"
                    v-model="equipment" />
                <label for="internet_access">internet_access</label>
            </div>
            <div>
                <h3>location</h3>
                <input id="taipei" name="location" type="radio" value="taipei" v-model="location" />
                <label for="taipei">Taipei</label>
                <input id="hsinchu" name="location" type="radio" value="hsinchu" v-model="location" />
                <label for="hsinchu">Hsinchu</label>
                <input id="taichung" name="location" type="radio" value="taichung" v-model="location" />
                <label for="taichung">Taichung</label>
                <input id="kaohsiung" name="location" type="radio" value="kaohsiung" v-model="location" />
                <label for="kaohsiung">Kaohsiung</label>
            </div>
            <button>Save</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courseId: "",
            courseName: "",
            courseDuration: null,
            category: "java",
            equipment: [],
            location: "",
            rememberMe: false,
            idValid: -1
        }
    },
    methods: {
        submitForm() {
            const course = {
                id: this.courseId,
                name: this.courseName,
                duration: this.courseDuration,
                category: this.category,
                equipment: this.equipment,
                location: this.location,
                rememberMe: this.rememberMe
            }
            console.log(course)
            this.courseId = ""
            this.courseName = ""
            this.courseDuration = null
            this.category = "java"
            this.equipment = []
            this.location = ""
            this.rememberMe = false
        },
        validateId() {
            if (this.courseId.trim() === "") {
                this.idValid = 0;
            } else {
                this.idValid = 1;
            }
        }
    }

}
</script>

<style scoped>
.form-control {
    border: 2px;
    margin: 0.5rem 0;
}

.form-control.invalid input {
    border-color: red;
}

.form-control.invalid label {
    color: red;
}
</style>