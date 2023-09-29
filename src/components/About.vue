<script setup></script>

<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>About Us</h2>
          <div class="about-content">
            In computing, a program is a specific set of ordered operations for
            a computer to perform. In the modern computer that John von Neumann
            outlined in 1945, the program contains a one-at-a-time sequence of
            instructions that the computer follows. Typically, the program is
            put into a storage area accessible to the computer. The computer
            gets one instruction and performs it and then gets the next
            instruction. The storage area or memory can also contain the data
            that the instruction operates on. Note that a program is also a
            special kind of data that indicates how to operate on application or
            user data.
          </div>
          <button type="button" class="btn btn-primary">Read More>></button>
        </div>
        <div class="col-md-6" skills-bar>
          <p>Adobe Photoshop</p>
          <div class="progress">
            <div class="progress-bar" style="width: 80%">80</div>
          </div>
          <p>UI Design</p>
          <div class="progress">
            <div class="progress-bar" style="width: 85%">85</div>
          </div>
          <p>WordPress</p>
          <div class="progress">
            <div class="progress-bar" style="width: 75%">75</div>
          </div>
          <p>Graphics Design</p>
          <div class="progress">
            <div class="progress-bar" style="width: 50%">50</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  padding-top: 50px;
  padding-bottom: 50px;
  color: #555;
}

#about .btn {
  margin-top: 20px;
  margin-bottom: 30px;
}
.about-content {
  padding-top: 20px;
}

.skills-bar p {
  margin-bottom: 6px;
  font-weight: 600;
}

.progress-bar {
  border-radius: 16px;
}
.progress {
  border-radius: 16px !important;
  margin-bottom: 20px;
}
</style>
