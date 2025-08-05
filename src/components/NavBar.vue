<template>
    <header class="">
        <nav class="navBar">
            <div class="navLeft">
                <img src="../assets/logo.png" alt="Logo" class="logoImg" />
                <span class="logoName">himalayas</span>
            </div>

            <div class="navRight">
                <ul class="navLinks">
                    <li><a href="#">
                            Jobs <span><i class="fas fa-chevron-down"></i></span>
                        </a></li>
                    <li><a href="#">
                            Companies <span><i class="fas fa-chevron-down"></i></span>
                        </a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Advice</a></li>
                    <li><a href="#">Updates</a></li>
                    <li><a href="#">Community</a></li>
                </ul>

                <img src="https://i.pravatar.cc/32?img=12" alt="User" class="userProfilePicture" />
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const menuAberto = ref(false)
</script>
