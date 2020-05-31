<template>
  <div class="sidebar-wrapper">
    <div class="profile-container">
      <img class="profile" :src="author.picture" alt="Profile Picture" />
      <h1 class="name">{{author.name}}</h1>
      <h3 v-if="author.tagline" class="tagline">{{author.tagline}}</h3>
    </div>
    <!--//.profile-container-->

    <div class="contact-container container-block">
      <ul class="list-unstyled contact-list">
        <li v-if="author.email" class="email">
          <i class="fas fa-envelope"></i>
          <a :href="`mailto:${author.email}`">{{author.email}}</a>
        </li>
        <li v-if="author.phone" class="phone">
          <i class="fas fa-phone"></i>
          <a :href="`tel:${author.phone}`">{{author.phone}}</a>
        </li>
        <li v-for="(link, type) in author.links" :key="type" :class="type">
          <i :class="`${type == 'link' ? 'fas' : 'fab'} fa-${type}`"></i>
          <a :href="link">{{link.replace('https://','')}}</a>
        </li>
      </ul>
    </div>
    <!--//.contact-container-->

    <div v-if="author.education" class="education-container container-block">
      <h2 class="container-block-title">Education</h2>
      <div class="item" v-for="(item,index) in author.education" :key="index">
        <h4 class="degree">{{item.title}}</h4>
        <h5 class="meta">{{item.place}}</h5>
        <div class="time">{{item.dates}}</div>
      </div>
    </div>

    <div v-if="author.languages" class="languages-container container-block">
      <h2 class="container-block-title">Languages</h2>
      <ul class="list-unstyled languages-list">
        <li v-for="(desc,lang) in author.languages" :key="lang">
          {{lang}}
          <span class="lang-desc">{{desc}}</span>
        </li>
      </ul>
    </div>
    <!--//.languages-container-->

    <div v-if="author.interests" class="interests-container container-block">
      <h2 class="container-block-title">Interests</h2>
      <ul class="list-unstyled interests-list">
        <li v-for="item in author.interests" :key="item">{{item}}</li>
      </ul>
    </div>
    <!--//.interests-container-->
  </div>
</template>


<script>
export default {
  name: "Sidebar",
  props: [ 'author' ]
};
</script>
