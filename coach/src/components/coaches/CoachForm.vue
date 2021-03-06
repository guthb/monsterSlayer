<template>
    <form action="">
        <div class="form-control">
            <label for="firstname">firstName</label>
            <input type="text" id="firstname"/>
        </div>
        <div class="form-control">
            <label for="lastname">lastName</label>
            <input type="text" id="lastname"/>
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea id="description" rows="5"></textarea>
        </div>
         <div class="form-control">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate"/>
        </div>
        <div class="form-control">
            <h3>Areas of Expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend">
                <lable for="frontend">Frontend Development</lable>
            </div>
             <div>
                <input type="checkbox" id="backend" value="backend">
                <lable for="backend">Backend Development</lable>
            </div>
             <div>
                <input type="checkbox" id="career" value="career">
                <lable for="career">Career Advisory</lable>
            </div>
        </div>
    </form>
</template>